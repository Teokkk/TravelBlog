import { Component } from 'react';

import {
  Dimensions, FlatList, SafeAreaView, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Images from '../../../assets';
import { appLogout } from '../../actions/AppAction';
import { toursGetAPI } from '../../actions/HomeAction';
import BarButton from '../../components/BarButton';
import ItemView from '../../components/ItemView';

const width = Dimensions.get('window').width
const tabButtons = [
    {
        title: 'All',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'East Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'Short Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    },
    {
        title: 'Long Tour',
        imageActive: Images.tours.allIconActive,
        imageInActive: Images.tours.allInActiveIcon
    }
]

class ToursScreen extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentBarIndex: 0,
        }
    }

    filterData = () => {
        const {currentBarIndex} = this.state
        const {toursData} = this.props.home
        if (currentBarIndex === 0) return toursData
        return toursData.filter((item, index) => item.type === tabButtons[currentBarIndex].title)
    }

    handleBarButtons = (type) => {
        let index = tabButtons.findIndex(item => item.title === type)
        this.setState({...this.state, currentBarIndex: index})
    }   

    renderItemView = ({ item, index }) => (
        <ItemView 
            item={item} 
            width={width}
            onEvent={(item) => {
                const {navigation} = this.props
                navigation.navigate('[Tours]Detail', item)
                // const {appLogout} = this.props
                // appLogout()

            }}
        />
    )

    renderBarButtons = () => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: 10
            }}>
                {tabButtons.map((item, index) => {
                    const {currentBarIndex} = this.state
                    return <BarButton 
                        image={currentBarIndex === index ? item.imageActive : item.imageInActive }
                        title={item.title}
                        onEvent={this.handleBarButtons}
                        isActive={currentBarIndex === index}
                    />
                })}
            </View>
        )
    }

    componentDidMount() {
        const {app, home, toursGetAPI} = this.props
        console.log(home)
        toursGetAPI()
    }
    componentWillUnmount() {
        console.log('****** Tours Closed')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('***** preview State: ', prevState)
        if (prevState.currentBarIndex !== this.state.currentBarIndex) {
            console.log('****** Tours Update: ', this.state.currentBarIndex)
        }
    }

    render() {
        return (
            <SafeAreaView>
                {this.renderBarButtons()}
                <FlatList
                    style={{
                        marginHorizontal: 4
                    }}
                    numColumns={2}
                    data={this.filterData()}
                    renderItem={this.renderItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
    
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    centerImg: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
        flex: 1
    },
    centerObj: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    titleStyle: {
        fontWeight: '800',
        fontSize: 20,
        marginVertical: 15,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15,
    },
});


const mapStateToProps = state => {
    const {app, home} = state
    return {app, home}
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        appLogout,
        toursGetAPI
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(ToursScreen)