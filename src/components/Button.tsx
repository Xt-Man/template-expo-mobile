import {
  ButtonSpinner,
  ButtonText,
  Button as GluestackButton,
} from "@/components/ui/button"
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof GluestackButton> & {
  title: string
  variant?: 'solid' | 'outline'
  isLoading?: boolean
}

export function Button({
  title,
  variant = 'solid',
  isLoading = false,
  ...props
}: Props) {

  const variantBackground = variant === 'outline' ? ' bg-transparent border' : ' bg-green-700 border-0';

  return (
    <GluestackButton
      className={`w-full h-14 border-green-500 rounded ${variantBackground}`}
      $active-bg={variant === 'outline' ? '$gray500' : '$green500'}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <ButtonText
          className={"text-sm " + variant === 'outline' ? 'text-green-500' : 'text-white'}
        >
          {title}
        </ButtonText>
      )}
    </GluestackButton>
  )
}