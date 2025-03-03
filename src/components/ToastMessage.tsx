import { Pressable } from "@/components/ui/pressable";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast"
import { VStack } from "@/components/ui/vstack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import colors from "tailwindcss/colors";

type Props = {
  id: string
  title: string
  description?: string
  action?: 'error' | 'success'
  onClose: () => void
}

export function ToastMessage({
  id,
  title,
  description,
  action = 'success',
  onClose,
}: Props) {

  const bgColor = action === 'success' ? colors.green[500] : colors.red[500]

  return (
    <Toast
      nativeID={`toast-${id}`}
      action={action}
      className={`mt-10 ${bgColor}`}
    >
      <VStack space="xs" className="w-full">
        <Pressable className="items-end" onPress={onClose}>
          <MaterialIcons name="close" color={colors.gray[50]} size={20} />
        </Pressable>

        <ToastTitle className="text-white">
          {title}
        </ToastTitle>

        {description && (
          <ToastDescription className="text-white">
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  )
}