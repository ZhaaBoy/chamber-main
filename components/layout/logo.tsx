import { Flex, Image, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

export const Logo = ({ href = '/', onClick }) => {
  return (
    <Flex h="12" alignItems="center">
      {' '}
      {/* Ubah tinggi header agar cukup */}
      <Link href={href} display="flex" alignItems="center" onClick={onClick}>
        <Image
          src="/chamber.png"
          alt="Chamber Logo"
          height="120px" // Ukuran ideal
          width="auto" // ⚠️ Penting: biar tidak gepeng
          objectFit="contain" // Jaga proporsi
        />
        <VisuallyHidden>Chamber</VisuallyHidden>
      </Link>
    </Flex>
  )
}
