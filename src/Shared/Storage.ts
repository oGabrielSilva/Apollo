import AsyncStorage from '@react-native-async-storage/async-storage';

abstract class Storage {
  protected abstract readonly key: string;

  public async storeData(data: string) {
    return AsyncStorage.setItem(this.key, data);
  }

  public async getStoreData() {
    const data = await AsyncStorage.getItem(this.key);
    return data ?? '';
  }
}

export default Storage;
