import * as React from 'react';
import { Box, Card, CardContent, TextField, InputAdornment, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <React.Fragment>
        {/* <Box sx={{ mt: 3 }}>
            <Card>
                <CardContent> */}
                    <Box sx={{ maxWidth: 250 }}>
                    <TextField
                        fullWidth
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <SearchIcon />
                            </SvgIcon>
                            </InputAdornment>
                        )
                        }}
                        placeholder="Search customer"
                        variant="outlined"
                    />
                    </Box>
                {/* </CardContent>
            </Card>
        </Box> */}
        </React.Fragment>
    )
}