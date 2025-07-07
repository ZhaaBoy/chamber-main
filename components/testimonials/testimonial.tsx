import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaTwitter } from 'react-icons/fa'

export interface TestimonialProps extends CardProps {
  name: string
  description: React.ReactNode
  avatar: string
  href?: string
  children?: React.ReactNode
}

export const Testimonial = ({
  name,
  description,
  avatar,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest}>
      <CardHeader>
        <Stack align="center" spacing={2} textAlign="center" w="full">
          <Avatar name={name} src={avatar} size="xl" />
          <Heading size="md">{name}</Heading>
          <Text color="muted" fontSize="sm">
            {description}
          </Text>
        </Stack>
      </CardHeader>

      <CardBody position="relative">
        {href && (
          <Link href={href} position="absolute" top="0" right="0">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
    </Card>
  )
}
