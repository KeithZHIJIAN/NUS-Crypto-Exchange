import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/Setting/dashboard-layout';
import { SettingsNotifications } from '../components/Setting/settings-notifications';
import { SettingsPassword } from '../components/Setting/settings-password';

const SettingPage = () => (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    sx={{ mb: 3 }}
                    variant="h4"
                >
                    Settings
                </Typography>
                <SettingsNotifications />
                <Box sx={{ pt: 3 }}>
                    <SettingsPassword />
                </Box>
            </Container>
        </Box>
    </>
);

SettingPage.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default SettingPage;