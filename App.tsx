import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

interface Istate {
  screenIndex: number;
}
type Iprops = {};

export class App extends Component<Istate, Iprops> {
  constructor(props) {
    super(props);

    this.state = {
      screenIndex: 0,
      ans: '',
      isTrue: 0,
      que: [
        {
          eng: 'how is Dog',
          gem: '',
          queStart: 'Dog is',
          queMid: 'Cute',
          queEnd: 'annimale',
          ansStart: 'Hund ist',
          ansMid: '',
          ansEnd: 'Tier',
          option1: 'Achtung',
          option2: 'niedlich',
          option3: 'albern',
          option4: 'Schlecht',
          queAns: 'niedlich',
        },
        {
          eng: 'how is Dog',
          gem: '',
          queStart: 'My',
          queMid: 'new',
          queEnd: 'home is big',
          ansStart: 'Mein',
          ansMid: '',
          ansEnd: 'Zuhause ist groß',
          option1: 'gut',
          option2: 'klein',
          option3: 'neues',
          option4: 'Okay',
          queAns: 'neues',
        },
        {
          eng: 'how is Dog',
          gem: '',
          queStart: 'Happy',
          queMid: 'new',
          queEnd: 'year',
          ansStart: 'Frohes',
          ansMid: 'neues',
          ansEnd: 'Jahr',
          option1: 'neues',
          option2: 'car',
          option3: 'Straße',
          option4: 'Jahr',
          queAns: 'Straße',
        },
        {
          eng: 'how is Dog',
          gem: '',
          queStart: 'Auto ',
          queMid: 'ist',
          queEnd: 'rot',
          ansStart: 'Hund ist',
          ansMid: '',
          ansEnd: 'Tier',
          option1: 'Achtung',
          option2: 'niedlich',
          option3: 'ist',
          option4: 'Schlecht',
          queAns: 'ist',
        },
        {
          eng: 'how is Dog',
          gem: '',
          queStart: 'small family',
          queMid: 'happy',
          queEnd: 'family',
          ansStart: 'kleine familie',
          ansMid: '',
          ansEnd: 'familie',
          option1: 'glückliche',
          option2: 'niedlich',
          option3: 'albern',
          option4: 'Schlecht',
          queAns: 'glückliche',
        },
      ],
    };
  }

  selected = () => {
    if (this.state.isTrue === 0) {
      return null;
    } else if (this.state.isTrue === 1) {
      return (
        <View style={styles.BottomView}>
          <Text>Great Job</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {
                marginTop: 10,
                backgroundColor: 'white',
              },
            ]}
            onPress={() => {
              if (this.state.screenIndex < 4) {
                this.setState({
                  screenIndex: this.state.screenIndex + 1,
                  isTrue: 0,
                  ans:""
                });
              } else {
                this.setState({screenIndex: 0, isTrue: 0,ans:""});
              }
            }}>
            <Text>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[styles.BottomView,{backgroundColor: 'red',}]}>
          <Text>Wrong Answer</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {
                marginTop: 10,
                backgroundColor: 'white',
              },
            ]}
            onPress={() => {
              if (this.state.screenIndex < 4) {
                this.setState({
                  screenIndex: this.state.screenIndex + 1,
                  isTrue: 0,
                  ans:""
                });
              } else {
                this.setState({screenIndex: 0, isTrue: 0,ans:""});
              }
            }}>
            <Text>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.TopView}>
          <View style={styles.innerTop}>
            <View style={styles.TopText}>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 20}}>
                Fill in the missing word
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 20}}>
                  {this.state.que[this.state.screenIndex].queStart}
                </Text>
                <View style={{paddingHorizontal: 5}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 2,
                      textDecorationLine: 'underline',
                    }}>
                    {this.state.que[this.state.screenIndex].queMid}
                  </Text>
                </View>
                <Text style={{color: 'white', fontSize: 20}}>
                  {this.state.que[this.state.screenIndex].queEnd}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{color: 'white', fontSize: 20}}>
                  {this.state.que[this.state.screenIndex].ansStart}
                </Text>
                <View style={{paddingHorizontal: 5}}>
                  {this.state.ans === '' ? (
                    <View
                      style={{
                        height: 1,
                        width: 50,
                        backgroundColor: 'white',
                        marginTop: 20,
                      }}
                    />
                  ) : (
                    <View style={styles.optionButton}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                        }}>
                        {this.state.ans}
                        {/* {this.state.que[this.state.screenIndex].ansMid} */}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={{color: 'white', fontSize: 20}}>
                  {this.state.que[this.state.screenIndex].ansEnd}
                </Text>
              </View>
            </View>
            <View style={styles.option}>
              <View style={styles.options}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    this.setState({
                      ans: this.state.que[this.state.screenIndex].option1,
                    });
                  }}>
                  <Text>{this.state.que[this.state.screenIndex].option1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    this.setState({
                      ans: this.state.que[this.state.screenIndex].option2,
                    });
                  }}>
                  <Text>{this.state.que[this.state.screenIndex].option2}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.options}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    this.setState({
                      ans: this.state.que[this.state.screenIndex].option3,
                    });
                  }}>
                  <Text>{this.state.que[this.state.screenIndex].option3}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => {
                    this.setState({
                      ans: this.state.que[this.state.screenIndex].option4,
                    });
                  }}>
                  <Text>{this.state.que[this.state.screenIndex].option4}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  this.state.ans === ''
                    ? 'rgba(88,135,156,1)'
                    : 'rgba(106,213,216,1)',
              },
            ]}
            onPress={() => {
              if (this.state.ans !== '') {
                if (
                  this.state.ans ===
                  this.state.que[this.state.screenIndex].queAns
                ) {
                  this.setState({isTrue: 1});
                } else {
                  this.setState({isTrue: 2});
                }
              }
            }}>
            <Text style={{color: 'white'}}>CONTINUE</Text>
          </TouchableOpacity>
          {this.selected()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(106,213,216,1)',
  },
  TopView: {
    backgroundColor: 'rgba(52,97,118,1)',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: '20%',
    alignItems: 'center',
  },
  innerTop: {flex: 0.9, alignItems: 'center', justifyContent: 'center'},
  TopText: {
    flex: 0.15,
    marginTop: '10%',
    justifyContent: 'space-between',
  },
  option: {
    flex: 0.5,
    width: '80%',
    // backgroundColor:'green',
    marginTop: '15%',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  optionButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  button: {
    height: 40,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(88,135,156,1)',
    borderRadius: 20,
  },
  BottomView: {
    backgroundColor: 'rgba(106,213,216,1)',
    height: 120,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
});

export default App;
