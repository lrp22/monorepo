import { View } from 'react-native';
import { tv } from 'tailwind-variants';

const cardVariants = tv({
  base: 'p-4 rounded-lg',
  variants: {
    variant: {
      default: 'bg-gray-50',
      elevated: 'bg-white shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CardProps {
  children?: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export function Card({ children, variant = 'default' }: CardProps) {
  return (
    <View className={cardVariants({ variant })}>
      {children}
    </View>
  );
}