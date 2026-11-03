export type DishType = 'veg' | 'nonveg';

export interface PreviewItem {
  t: DishType;
  name: string;
  desc: string;
  price: string;
}

export interface PreviewMenu {
  label: string;
  more: string;
  items: PreviewItem[];
}

export const previewMenus: Record<'starters' | 'drinks', PreviewMenu> = {
  starters: {
    label: 'Starters · Indian',
    more: '+ 13 more Indian starters',
    items: [
      { t: 'nonveg', name: 'Chicken Tikka', desc: 'Boneless, yoghurt-marinated, from the tandoor', price: '₹355' },
      { t: 'nonveg', name: 'Bhatti Chicken', desc: 'Smoky, spiced; ask for it your way', price: '₹355' },
      { t: 'veg', name: 'Dahi Kebab', desc: 'Hung curd and paneer, crisp outside, soft inside', price: '₹275' },
      { t: 'veg', name: 'Cheese Bhara Kebab', desc: 'Soft kebab with a cheese centre', price: '₹265' },
    ],
  },
  drinks: {
    label: 'Beverages',
    more: '+ 31 more drinks',
    items: [
      { t: 'veg', name: 'Baba Ji Ki Booti', desc: 'Watermelon, mint and basil', price: '₹165' },
      { t: 'veg', name: 'Coke', desc: 'Chilled', price: '₹70' },
    ],
  },
};

