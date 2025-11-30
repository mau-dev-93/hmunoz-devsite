import { Card, CardContent, Box, Skeleton, Stack } from "@mui/material";

const CourseCardSkeleton = () => {
    return (
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 245,
                width: "100%",
                height: "100%",
                borderRadius: 2,
            }}
        >
            <Skeleton
                variant="rectangular"
                width="100%"
                height={160}
                sx={{ borderRadius: '8px 8px 0 0' }}
            />
            <CardContent sx={{ p: 2, pt: 3, flexGrow: 1 }}>
                <Skeleton variant="text" width="80%" height={24} sx={{ mb: 2 }} />
                <Skeleton variant="circular" width={32} height={32} sx={{ mb: 3 }} />
                <Box mb={3}>
                    <Skeleton variant="rectangular" width="100%" height={8} sx={{ borderRadius: 1, mb: 2 }} />
                </Box>
                <Stack spacing={2} mb={3}>
                    <Skeleton variant="text" width="100%" height={16} />
                    <Skeleton variant="text" width="100%" height={16} />
                    <Skeleton variant="text" width="100%" height={16} />
                </Stack>
                <Skeleton variant="text" width="60%" height={16} sx={{ mb: 1 }} />
                <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                    <Skeleton variant="rounded" width={60} height={24} />
                    <Skeleton variant="rounded" width={60} height={24} />
                    <Skeleton variant="rounded" width={60} height={24} />
                </Stack>
            </CardContent>
            <Box sx={{ p: 2 }}>
                <Skeleton variant="rectangular" width="100%" height={32} sx={{ borderRadius: 1 }} />
            </Box>
        </Card>
    );
};

export default CourseCardSkeleton;