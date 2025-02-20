import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField>

export function Input({ ...props }: Props) {
  return (
    <GluestackInput
      className="bg-gray-700 h-14 px-4 border-0 rounded-md focus:border-1 focus:border-green-500"
    >
      <InputField
        className="text-white placeholder-gray-300"
        {...props}
      />
    </GluestackInput>
  )
}