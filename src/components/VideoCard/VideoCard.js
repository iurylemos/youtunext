import React from 'react';
import dayjs from 'dayjs';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 150,
  },
  avatar: {
    height: 35,
    width: 35,
    marginRight: '0.5em',
  },
}));

export default function VideoCard({ item }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Avatar
        alt={item.title}
        src={item.thumb}
        variant="square"
        className={classes.img}
        onClick={() => {
          router.push({
            pathname: '/video/[id]',
            // eslint-disable-next-line no-underscore-dangle
            query: { id: item?._id },
          });
        }}
      />
      <Box display="flex" mt={1}>
        <Box>
          <Avatar
            alt={item.authorNome}
            src={item.authorAvatar}
            className={classes.avatar}
          >
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} visualizações • ${dayjs(item.updateAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
