import { useState, useContext, useEffect } from "react";
import { VictoryPie, VictoryLabel } from "victory-native";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  ScrollView,
} from "react-native";
import { AppContext } from "../../contexts/app/app-context";
import { capitalizeFirstLetter, parseData } from "../../util/utils";
import { INCOME_SCREEN_TYPE } from "../../../assets/static/constants";
import PALETTE from "../../util/palette";

const GraphScreen = () => {
  const { currentUser, getUserData } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const [chartData, setChartData] = useState([]);
  const [legendData, setLegendData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const userData = await getUserData(currentUser.uid, INCOME_SCREEN_TYPE);
        const { chartData, legendData } = parseData(userData);
        setChartData(chartData);
        setLegendData(legendData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [currentUser.uid, INCOME_SCREEN_TYPE]);

  const handlePiePress = (event, { index }) => {
    //console.log(`Segment pressed: ${index}`);
    setActiveIndex(index);
  };

  const RenderLabel = (props) => {
    const { index, datum } = props;
    const isActive = index === activeIndex;

    // Determine label content based on whether the segment is active
    let labelContent;
    if (isActive) {
      labelContent = `${capitalizeFirstLetter(datum.x)}:\n ${datum.y}%`; // Text and percentage for active
    } else if (activeIndex !== null) {
      labelContent = ""; // Only percentage for inactive when one is active
    } else {
      labelContent = `${datum.y}%`; // Text and percentage when none are active
    }

    const fontSize = isActive ? 16 : 12; // Larger font for active segment
    const color = isActive ? "#0D47A1" : PALETTE.neutral.darkGrey; // Different color for active segment

    return (
      <VictoryLabel
        {...props}
        text={labelContent}
        style={{ fontSize, fill: color }}
      />
    );
  };

  const renderLegend = () => (
    <View style={styles.legendContainer}>
      {legendData.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: item.color }]} />
          <Text style={styles.legendText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={PALETTE.accent.warmOrange} />
        </View>
      ) : (
        <TouchableOpacity onPressIn={handlePiePress}>
          <VictoryPie
            data={chartData}
            labelRadius={({ innerRadius }) => innerRadius + 25}
            labelComponent={<RenderLabel />}
            style={{
              data: {
                fill: ({ datum }) => datum.color,
                stroke: ({ index }) =>
                  index === activeIndex ? "black" : "none",
                strokeWidth: ({ index }) => (index === activeIndex ? 3 : 0),
              },
              labels: { fill: "white", fontSize: 10, fontWeight: "bold" },
            }}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPressIn: handlePiePress,
                },
              },
            ]}
            animate={{
              duration: 500,
            }}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.textBase}>Legend:</Text>
      {renderLegend()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PALETTE.neutral.darkGrey,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  legendContainer: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 40,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  legendText: {
    color: PALETTE.neutral.white,
  },
  textBase: {
    color: PALETTE.neutral.white,
    marginBottom: 5,

    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default GraphScreen;
