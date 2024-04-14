import React, { useState } from "react";
import {
  View,
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
} from "react-native";

const placeholder = require("./assets/placeholder.png");

type PlaceholderProps = {
  loaded: boolean;
  style: StyleProp<ImageStyle>;
};

function Placeholder({ loaded, style }: PlaceholderProps) {
  if (loaded) {
    return null;
  } else {
    return <Image style={style} source={placeholder} />;
  }
}

type Props = {
  style: StyleProp<ImageStyle>;
  resizeMode: ImageProps["resizeMode"];
  source: ImageSourcePropType | null;
};

export default function LazyImage({ style, resizeMode, source }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={style}>
      {!!source ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={style}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      ) : (
        <Placeholder loaded={loaded} style={style} />
      )}
    </View>
  );
}
