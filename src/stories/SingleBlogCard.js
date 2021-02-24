import React from 'react';
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CalendarIcon from "@material-ui/icons/CalendarTodayOutlined"
import { dateFormatToString } from "../utils/shared";
import PropTypes from 'prop-types';


export const SingleBlogCard = ({ post }) => {

    return(
        <Card
        css={(theme) => ({
          transition: `500ms`,
          color: `#5d5d5d`,
          "&:hover, &:focus, &:focus-within": {
            transform: `translateY(-10px)`,
            boxShadow: theme.shadows[6],
            color: theme.palette.secondary.main,
          },
        })}
      >
       <Box display="flex" p={2} alignItems="center">
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              css={(theme) => ({ gap: theme.spacing(1) + `px` })}
            >
              <Avatar
                imgProps={{
                  loading: `lazy`,
                  width: `40px`,
                  height: `40px`,
                }}
                src={post?.author?.node?.avatar?.url ?? ``}
                alt={`${post?.author?.node?.firstName} ${post?.author?.node?.lastName}`}
              />
              <Typography
                variant="subtitle2"
                component="div"
                color="textSecondary"
                css={{ fontWeight: 600 }}
              >{`${post.author?.node?.firstName} ${post?.author?.node?.lastName}`}</Typography>
            </Box>
            <Box
              alignItems="center"
              display="flex"
              css={(theme) => ({ gap: theme.spacing(1) + `px` })}
            >
              <CalendarIcon
                color="secondary"
                css={{ width: `1rem`, height: `1rem` }}
              />
              <Typography
                variant="subtitle2"
                component="div"
                color="textSecondary"
              >
                {dateFormatToString(post?.date)}
              </Typography>
            </Box>
          </Box>
          <Box p={3}>
            <Typography component="div" variant="h6" css={{ fontWeight: 800 }}>
              {post?.title ?? `Post Title`}
            </Typography>
          </Box>
      </Card>
    )
}

SingleBlogCard.propTypes = {
    post: PropTypes.object,
};