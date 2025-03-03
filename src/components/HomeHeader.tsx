import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text"
import { HStack } from "@/components/ui/hstack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from "tailwindcss/colors";

export function HomeHeader() {
  return (
    <HStack className="bg-gray-600 pt-4 pb-2 px-2 items-center">
      <VStack className="flex-1">
        <Text className="text-gray-100 text-sm">
          Hi,
        </Text>
        <Heading className="text-gray-100 text-sm">
          John Doe
        </Heading>
      </VStack>

      <MaterialIcons name="logout" color={colors.gray[200]} size={20} />
    </HStack>
  )
}