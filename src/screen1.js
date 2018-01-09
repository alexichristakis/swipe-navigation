import React, { Component } from "react";
import { Text, View, Image, StatusBar, Dimensions } from "react-native";

import StatusBarBackground from "./assets/status-bars/screen1.png";

export default class Friends extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />

				<Image
					source={StatusBarBackground}
					style={{
						position: "absolute",
						left: -300,
						top: 0,
						height: 22,
						width: Dimensions.get("window").width + 300,
					}}
				/>

				<Text style={{ padding: 30, flex: 2, fontSize: 36, fontWeight: "bold" }}>Friends</Text>
			</View>
		);
	}
}
