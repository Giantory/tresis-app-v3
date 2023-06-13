// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 105,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h5'>Bienvenido, <strong>Daniel</strong> 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' ,mt: 3}}>
          dfigueroam@ucvvirtual.edu.pe
        </Typography>
        
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Lima Norte
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          7002507513
        </Typography>
        <Button size='small' variant='contained'>
          VER DATOS
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='https://i.ibb.co/qxhLh8L/user.png  ' sx={{mb:0}} />
      </CardContent>
    </Card>
  )
}

export default Trophy
