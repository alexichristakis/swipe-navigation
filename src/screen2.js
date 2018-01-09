import React, { Component } from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";

import StatusBarBackground from "./assets/status-bars/screen2.png";

export default class Feed extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={StatusBarBackground}
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						height: 22,
						width: Dimensions.get("window").width + 300,
					}}
				/>
				<Text style={{ padding: 30, flex: 2, fontSize: 36, fontWeight: "bold" }}>Feed</Text>
			</View>
		);
	}
}
