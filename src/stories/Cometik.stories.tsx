import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cometik } from "../../lib/icons/Cometik";

const meta = {
	title: "Icons/Cometik",
	component: Cometik,
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
			defaultValue: "currentColor",
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
} satisfies Meta<typeof Cometik>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 24,
		color: "currentColor",
	},
};

export const Large: Story = {
	args: {
		size: 64,
		color: "currentColor",
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
