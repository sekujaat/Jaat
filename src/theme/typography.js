import colors from "./colors";
import fonts from "./fonts";

const typography = {
  heading1: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.textPrimary,
  },
  heading2: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.textPrimary,
  },
  subtitle: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.textSecondary,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textPrimary,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textSecondary,
  },
};

export default typography;