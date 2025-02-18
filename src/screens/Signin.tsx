
import { Image } from "@/components/ui/image"
import { VStack } from "@/components/ui/vstack"
import BackgroundImg from "@assets/background.png"

export function SignIn() {

  return (
    <VStack className="flex flex-1 bg-gray-700">
      <Image
        alt="background"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        className="w-full h-[624] absolute"
      />
    </VStack>
  )
}