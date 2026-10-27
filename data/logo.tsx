import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

/** Wordmark Alder Provisions — neighborhood grocer */
export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const text = useColorModeValue('#1A241C', '#F6F3EC')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 36"
      role="img"
      aria-label="Alder Provisions"
      {...props}
    >
      <title>Alder Provisions</title>
      <circle cx="14" cy="18" r="10" fill="none" stroke="#2F6B45" strokeWidth="2" />
      <path
        d="M14 10c2 3 3 5 3 8s-1 5-3 8c-2-3-3-5-3-8s1-5 3-8z"
        fill="#2F6B45"
      />
      <text
        x="32"
        y="24"
        fill={text}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontWeight="600"
      >
        Alder Provisions
      </text>
    </chakra.svg>
  )
}
