export type DishType = 'veg' | 'nonveg';

export interface Dish {
  t?: DishType;
  name: string;
  desc: string;
  price: string;
  sample?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  items: Dish[];
  img: string;
  alt: string;
  credit: string;
}

export interface MenuGroup {
  time: string;
  title: string;
  hi: string;
  cats: Category[];
}

const V = 'veg' as const;
const N = 'nonveg' as const;
const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
const own = (n: string) => `/assets/photos/${n}.png`;
const S = (t: DishType, name: string, desc: string): Dish => ({ t, name, desc, price: '₹ —', sample: true });
const C = (id: string, name: string, count: number, items: Dish[] | undefined, img: string, alt: string, stock?: boolean): Category => ({
  id,
  name,
  count,
  items: items || [],
  img,
  alt,
  credit: stock ? 'Stock photo · representative' : 'Guest photo · The Town House'
});

export const groups = [
      { time: '11:00', title: 'Doors open', hi: 'सुबह 11 बजे', cats: [
        C('soup', 'Soup', 5, [S(V, 'Tomato Soup', 'With crunchy croutons'), S(V, 'Hot & Sour Soup', 'Peppery, tangy, Indo-Chinese style')], own('soup'), 'Tomato soup with croutons'),
        C('salads', 'Salads', 4, [S(V, 'Garden Salad', 'Fresh greens, cucumber, cherry tomato'), S(N, 'Chicken Caesar Salad', 'Grilled chicken, parmesan, croutons')], px(1640777), 'A fresh salad bowl', true),
        C('wraps', 'Pita-wich & Wraps', 4, [S(V, 'Paneer Tikka Wrap', 'Tandoori paneer, onion, mint mayo'), S(N, 'Chicken Tikka Wrap', 'Smoky chicken, crunchy veg')], px(9624298), 'A grilled wrap on a plate', true),
        C('tea', 'Hot Tea & Coffee', 2, [S(V, 'Masala Chai', 'Ginger, cardamom, milk'), S(V, 'Hot Coffee', 'Frothy, milky, comforting')], px(5946623), 'A cup of masala chai with spices', true),
        C('burgers', 'Burgers · with dip & fries', 4, [S(V, 'Crispy Veg Burger', 'With dip and fries'), S(N, 'Fried Chicken Burger', 'Crunchy fillet, lettuce, mayo; with fries')], own('burger-fries'), 'Fried chicken burger with fries'),
      ] },
      { time: '13:00', title: 'Lunch', hi: 'दोपहर 1 बजे', cats: [
        C('indian-mains', 'Indian Mains', 26, [S(V, 'Dal Makhani', 'Slow-cooked black lentils, butter, cream'), S(N, 'Butter Chicken', 'Tandoori chicken in a silky tomato gravy')], px(37182517), 'Dal makhani with naan', true),
        C('breads', 'Indian Breads', 11, [S(V, 'Butter Naan', 'From the tandoor'), S(V, 'Lachha Paratha', 'Flaky, layered')], px(20446413), 'Naan with curry', true),
        C('biryani', 'Biryani & Rice', 6, [S(N, 'Chicken Biryani', 'Long-grain rice, whole spices'), S(V, 'Jeera Rice', 'Basmati tempered with cumin')], px(4224314), 'Chicken biryani on a dark plate', true),
        C('raita', 'Curd & Raita', 6, [S(V, 'Boondi Raita', 'Chilled curd, crisp boondi'), S(V, 'Mix Veg Raita', 'Cucumber, onion, tomato')], px(29148133), 'An Indian thali with curd and naan', true),
      ] },
      { time: '17:00', title: 'Evening', hi: 'शाम 5 बजे', cats: [
        C('momo', 'Momo', 3, [S(V, 'Veg Steamed Momo', 'With red chutney'), S(N, 'Chicken Steamed Momo', 'With red chutney')], own('momos'), 'Momos in a bamboo steamer'),
        C('fries', 'Fries', 3, [S(V, 'Salted Fries', 'Classic, crisp'), S(V, 'Peri Peri Fries', 'Tossed in peri peri spice')], own('burger'), 'Fries served with a burger and dip'),
        C('world-starters', 'Starters · World Cuisine', 25, [S(V, 'Honey Chilli Potato', 'Crispy, sticky, sesame'), S(V, 'Crispy Corn', 'Salt and pepper, spring onion')], own('chilli-potato'), 'Honey chilli potato with sesame'),
        C('shakes', 'Milk Shakes', 7, [S(V, 'Chocolate Shake', 'Thick, with chocolate sauce'), S(V, 'Oreo Shake', 'Blended with cookies')], px(3727250), 'A chocolate milkshake', true),
        C('beverages', 'Beverages', 33, [
          { t: V, name: 'Baba Ji Ki Booti', desc: 'Watermelon, mint and basil', price: '₹165' },
          S(V, 'Blue Lagoon', 'Blue curaçao syrup, lemon, soda'),
          { t: V, name: 'Coke', desc: 'Chilled', price: '₹70' },
        ], own('blue-lagoon'), 'A Blue Lagoon mocktail'),
      ] },
      { time: '20:00', title: 'Dinner', hi: 'रात 8 बजे', cats: [
        C('indian-starters', 'Starters · Indian', 17, [
          { t: N, name: 'Chicken Tikka', desc: 'Boneless, yoghurt-marinated, from the tandoor', price: '₹355' },
          { t: N, name: 'Bhatti Chicken', desc: 'Smoky, spiced; ask for it your way', price: '₹355' },
          { t: V, name: 'Dahi Kebab', desc: 'Hung curd and paneer, crisp outside, soft inside', price: '₹275' },
          { t: V, name: 'Cheese Bhara Kebab', desc: 'Soft kebab with a cheese centre', price: '₹265' },
        ], px(28674559), 'Paneer tikka platter', true),
        C('pizza', 'Hand-Tossed Pizza', 9, [S(V, 'Paneer Tikka Pizza', 'Paneer, capsicum, onion, tikka sauce'), S(V, 'Margherita', 'Tomato, mozzarella, basil')], own('pizza'), 'Paneer pizza'),
        C('pasta', 'Pasta', 10, [S(V, 'Pink Sauce Penne', 'Tomato-cream sauce, garlic bread'), S(V, 'Alfredo Pasta', 'Creamy white sauce, herbs')], own('penne'), 'Pink sauce penne with garlic bread'),
        C('oriental', 'Oriental Gravy', 8, [S(V, 'Chilli Paneer Gravy', 'Capsicum, onion, soy-chilli'), S(N, 'Chilli Chicken Gravy', 'Wok-tossed, spicy')], own('chilli-dish'), 'A chilli dish in Indo-Chinese gravy'),
        C('noodles', 'Fried Rice & Noodles', 14, [S(V, 'Veg Hakka Noodles', 'Cabbage, carrot, spring onion'), S(N, 'Chicken Fried Rice', 'Egg, chicken, wok-fried')], own('noodles'), 'Hakka noodles'),
        C('continental', 'Continental Mains', 5, [S(N, 'Grilled Chicken with Mash', 'Pepper sauce, grilled veg'), S(V, 'Grilled Cottage Cheese', 'Herb mash, sautéed veg')], own('continental'), 'Grilled chicken on mashed potato with vegetables'),
        C('combos', 'Townhouse Combos', 7, [S(V, 'Veg Combo', 'A main, bread or rice, and a drink'), S(N, 'Non-Veg Combo', 'A main, bread or rice, and a drink')], own('mocktails'), 'A table of pizza, pasta and mocktails'),
      ] },
      { time: '22:00', title: 'Something sweet', hi: 'रात 10 बजे', cats: [
        C('desserts', 'Desserts', 6, [S(V, 'Gulab Jamun', 'Warm, in syrup'), S(V, 'Brownie with Ice Cream', 'Warm brownie, vanilla scoop')], px(11887844), 'Gulab jamun on a white plate', true),
      ] },
    ];
