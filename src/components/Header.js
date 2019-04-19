import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';

const styles = {
    menuButton: {
        marginLeft: 'auto'
    },
    brandName: {
        fontSize: '2rem'
    }
}

class Header extends Component {
    state = {
        rightDrawer: false,
        showHeader: false,
        links: [
            {title: 'Events starts in', name: 'slider'}, 
            {title: 'Venue NFO', name: 'venueInfo'}, 
            {title: 'Highlights', name: 'highlights'}, 
            {title: 'Pricing', name: 'pricing'}, 
            {title: 'Location', name: 'location'}
        ]
    }

    toggleDrawer(value) {
        this.setState({ rightDrawer: value })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if (window.scrollY > 0) {
            this.setState({ showHeader: true })
        } else {
            this.setState({ showHeader: false })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" style={{ backgroundColor: this.state.showHeader ? '#2f2f2f' : 'transparent' }}>
                <Toolbar>
                    <Typography className={classes.brandName} color="inherit">Dung's Birthday Celebration</Typography>
                    <IconButton className={classes.menuButton} onClick={() => this.toggleDrawer(true)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={this.state.rightDrawer} onClose={() => this.toggleDrawer(false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={() => this.toggleDrawer(false)}
                            onKeyDown={() => this.toggleDrawer(false)}
                        >
                            <List>
                                {this.state.links.map((item, index) => (
                                    <ListItem button key={item.name}>
                                        <Link to={item.name} smooth={true} offset={-64} duration={500}>
                                            <ListItemText primary={item.title} /> 
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);