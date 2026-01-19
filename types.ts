export interface Product {
  id: string;
  name: string;
  ref: string;
  image: string;
  specs: {
    [key: string]: string;
  };
  description: string;
}

export interface StatMetric {
  id: string;
  icon: string;
  label: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface ProcessNode {
  id: string;
  icon: string;
  title: string;
  meta: string;
  description: string;
}
