import { Box } from '@chakra-ui/react'
import {
  Section,
  SectionProps,
  SectionTitle,
  SectionTitleProps,
} from 'components/section'

export interface TestimonialsProps
  extends Omit<SectionProps, 'title'>,
    Pick<SectionTitleProps, 'title' | 'description'> {}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const { children, title, ...rest } = props

  return (
    <Section {...rest}>
      <SectionTitle title={title} />

      <Box
        id="scroll-wrapper"
        display="flex"
        overflowX="auto"
        scrollSnapType="x mandatory"
        scrollBehavior="smooth"
        gap={6}
        px={4}
        py={6}
        whiteSpace="nowrap"
        width="100%"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <Box
                id="scroll-wrapper"
                key={index}
                scrollSnapAlign="center"
                display="inline-block"
                minW={{ base: '260px', sm: '300px' }}
              >
                {child}
              </Box>
            ))
          : children}
      </Box>
    </Section>
  )
}
