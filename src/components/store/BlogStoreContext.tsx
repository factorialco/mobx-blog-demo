import React from 'react';
import { useLocalObservable } from 'mobx-react';
import { createStore, Store } from './BlogStore';

const StoreContext = React.createContext<Store | null>(null);
export const BlogStoreProvider = ({ children }: any) => {
  const store = useLocalObservable(createStore);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
  
export const useBlogStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('store not defined');
  }
  return store;
};