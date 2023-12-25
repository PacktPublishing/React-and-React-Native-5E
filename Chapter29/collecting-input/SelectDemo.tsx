import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Adapt, Select, SelectProps, Sheet } from "tamagui";

export function SelectDemoItem(props: SelectProps) {
  const items = ["First", "Second", "Third"];
  const [val, setVal] = useState("first");

  return (
    <Select
      id="select"
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger iconAfter={ChevronDown}>
        <Select.Value placeholder="Select" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          native={!!props.native}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="quick"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.Viewport
          animation="quick"
          enterStyle={{ o: 0, y: -10 }}
          exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            {items.map((item, i) => {
              return (
                <Select.Item index={i} key={item} value={item.toLowerCase()}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}
