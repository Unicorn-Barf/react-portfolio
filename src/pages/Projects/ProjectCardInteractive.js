import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ProjectCardInteractive(props) {
  const { imageUrl, projectName, about, deployedSite, githubUrl } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={deployedSite} underline="none" target='_blank' rel='noopener'>
          <Button size="small">Check it out</Button>
        </Link>

        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
