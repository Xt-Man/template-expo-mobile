import { Center } from "@/components/ui/center";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors"

export function Loading() {

  return (
    <Center>
      <Spinner size="large" color={colors.gray[500]} />
    </Center>
  )
}