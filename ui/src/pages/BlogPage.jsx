import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import loadable from '@loadable/component';
const Iconify = loadable(() => import('../components/Iconify'));
const BlogPostCard = loadable(() => import('../components/Blog/BlogPostCard'));
const BlogPostsSort = loadable(() => import('../components/Blog/BlogPostsSort'));
const BlogPostsSearch = loadable(() => import('../components/Blog/BlogPostsSearch'));
// mock
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    {/*Blog*/}
                </Typography>
                <Button variant="contained" /*component={RouterLink}*/ to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
                    {/*New Post*/}
                </Button>
            </Stack>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <BlogPostsSearch posts={POSTS} />
                <BlogPostsSort options={SORT_OPTIONS} />
            </Stack>

            <Grid container spacing={3}>
                {POSTS.map((post, index) => (
                    <BlogPostCard key={post.id} post={post} index={index} />
                ))}
            </Grid>
        </Container>
    );
}