import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

const Editor: React.FC = () => {
  const { quill, quillRef, editor } = useQuill()
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log(quill.root.innerHTML)
      })
    }
  }, [quill])
  return (
    <Box>
      <Box ref={quillRef} />
    </Box>
  )
}

export default Editor
