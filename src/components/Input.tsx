import { FormControl, FormControlError, FormControlErrorText } from "@/components/ui/form-control";
import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null
  isInvalid?: boolean
  isReadOnly?: boolean
}

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...props
}: Props) {

  const opacity = isReadOnly ? 'opacity-50' : 'opacity-100'

  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} className="mb-4 w-full">
      <GluestackInput
        className={`h-14 border-0 rounded-md focus:border-1 focus:border-green-500 ${opacity}`}
        isReadOnly={isReadOnly}
      >
        <InputField
          className="text-white placeholder-gray-300 bg-gray-700 px-4"
          {...props}
        />
      </GluestackInput>
      <FormControlError>
        <FormControlErrorText className="text-red-500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}