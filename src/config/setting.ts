import {
  AppConfigState,
  DeviceType,
  LayoutMode,
  LocaleName,
  PageAnim,
  SideTheme,
  ThemeMode,
} from "@/types/BaseConfig.d";

const primaryColor = "#7585f9";
const primaryHoverColor = "#919bff";

document.documentElement.style.setProperty("--van-primary-color", primaryColor);

export default {
  theme: ThemeMode.LIGHT,
  sideTheme: SideTheme.DARK,
  themeColor: primaryColor,
  themeColorHover: primaryHoverColor,
  layoutMode: LayoutMode.LTR,
  deviceType: DeviceType.PC,
  pageAnim: PageAnim.OPACITY,
  isCollapse: false,
  actionBar: {
    isShowRefresh: true,
    isShowFullScreen: true,
  },
  localeName: LocaleName.zhCN,
} as AppConfigState;
