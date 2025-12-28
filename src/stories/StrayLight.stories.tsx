import type { Meta, StoryObj } from "@storybook/react-vite";
import { StrayLight } from "../../lib/icons/StrayLight";

const meta = {
  title: "Icons/StrayLight",
  component: StrayLight,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number" },
      description: "アイコンのサイズ（幅と高さ）",
      defaultValue: 24,
    },
    color: {
      control: { type: "color" },
      description: "アイコンの色",
    },
    className: {
      control: { type: "text" },
      description: "CSSクラス名",
    },
    style: {
      control: { type: "object" },
      description: "インラインスタイル",
    },
  },
} satisfies Meta<typeof StrayLight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 64,
  },
};

export const CustomColor: Story = {
  args: {
    size: 48,
    color: "#FF6B6B",
  },
};

export const WithClassName: Story = {
  args: {
    size: 48,
    className: "custom-icon-class",
  },
};

export const WithCustomStyle: Story = {
  args: {
    size: 48,
    style: {
      border: "2px solid #333",
      borderRadius: "8px",
      padding: "8px",
    },
  },
};
