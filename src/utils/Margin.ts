import { StatusBar } from 'react-native';

class Margin {
  public static horizontal: number = 32;

  public static mainVertical: number = (StatusBar.currentHeight || 16) + 16;

  public static vertical: number = 16;

  private constructor() {}
}

export default Margin;
