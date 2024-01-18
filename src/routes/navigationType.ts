import {AppStackParamList, AppTabParamList} from '.';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppTabParamList, AppStackParamList {}
  }
}
