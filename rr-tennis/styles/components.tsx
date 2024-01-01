import { UseToastOptions } from "@chakra-ui/react"

export const successToast: UseToastOptions = {
    title: `Submitted`, 
    status: 'success', 
    position: 'top-right', 
    duration: 9000,
    containerStyle: {
      marginTop: '5vh'
    }, 
    isClosable: true
}

export const errorToast: UseToastOptions = {
    title: `Server Error`, 
    status: 'error', 
    position: 'top-right', 
    duration: 9000,
    containerStyle: {
      marginTop: '5vh'
    },  
    isClosable: true
}