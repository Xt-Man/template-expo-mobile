
import { Center } from "@/components/ui/center"
import { Heading } from "@/components/ui/heading"
import { Image } from "@/components/ui/image"
import { VStack } from "@/components/ui/vstack"
import { Text } from "@/components/ui/text"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { ScrollView } from "react-native"

export function SignIn() {

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>

        <VStack className="flex flex-1 bg-gray-700">
          <Image
            alt="background"
            source={BackgroundImg}
            defaultSource={BackgroundImg}
            className="w-full h-[624] absolute"
          />

          <VStack className="flex flex-1 px-2 pb-4">
            <Center className="mt-24">
              <Logo />
            </Center>

            <Center className="gap-2">
              <Heading className="text-gray-100">Acesse sua conta</Heading>

              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input placeholder="Senha" secureTextEntry />

              <Button title="Acessar" />
            </Center>

            <Center className="flex flex-1 justify-end mt-4">
              <Text className="text-gray-100 text-sm mb-3">
                Ainda não tem acesso?
              </Text>

              <Button title="Criar conta" variant="outline" />
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
  )
}