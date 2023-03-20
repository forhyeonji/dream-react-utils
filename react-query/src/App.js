import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
