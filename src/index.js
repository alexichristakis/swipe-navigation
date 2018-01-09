import React, { Component } from "react";
import {
	Animated,
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";

import LeftScene from "./screen1";
import RightScene from "./screen2";

import FriendsIcon from "./assets/friends_icon.png";
import FeedIcon from "./assets/feed_icon.png";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const xOffset = new Animated.Value(0);
const _onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: xOffset } } }], {
	useNativeDriver: true,
});

function Page(props: { children?: ReactElement<*> }) {
	return <View style={{ flex: 1, width: SCREEN_WIDTH }}>{props.children}</View>;
}

function iconTransform(index: number) {
	return {
		transform: [
			{
				scale: xOffset.interpolate({
					inputRange: [
						(index - 1) * SCREEN_WIDTH,
						index * SCREEN_WIDTH,
						(index + 1) * SCREEN_WIDTH,
					],
					outputRange: [0.5, 1, 0.5],
				}),
			},
			{
				translateX: xOffset.interpolate({
					inputRange: [
						(index - 1) * SCREEN_WIDTH,
						index * SCREEN_WIDTH,
						(index + 1) * SCREEN_WIDTH,
					],
					outputRange: [275, 0, -275],
				}),
			},
		],
	};
}

export default class Home extends Component {
	refScrollView = view => {
		this.scrollView = view.getNode();
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Animated.ScrollView
					horizontal
					pagingEnabled
					// ref={ref => (this.tabBar = ref._component)}
					ref={this.refScrollView}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					automaticallyAdjustContentInsets={false}
					onMomentumScrollEnd={this.onScrollEnd}
					scrollEventThrottle={16}
					onScroll={_onScroll}
					style={{ flex: 1, flexDirection: "row" }}>
					<Page>
						<LeftScene />
					</Page>
					<Page>
						<RightScene />
					</Page>
				</Animated.ScrollView>

				<TouchableOpacity
					onPressIn={() => this.scrollView.scrollTo({ x: 0, y: 0, animated: true })}>
					<Animated.Image style={[styles.icon, iconTransform(0)]} source={FriendsIcon} />
				</TouchableOpacity>
				<TouchableOpacity onPressIn={() => this.scrollView.scrollToEnd()}>
					<Animated.Image style={[styles.icon, iconTransform(1)]} source={FeedIcon} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		position: "absolute",
		height: 40,
		width: 40,
		bottom: 0,
		alignSelf: "center",
		overflow: "visible",
		marginBottom: 15,
	},
});
