import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const tabsData = ['Thumbnail', 'Name', 'City'];

const ZapKey = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDataInitial, setTableDataInitial] = useState([]);
  const [isAscending, setIsAscending] = useState({ Name: true, City: true });

  useEffect(() => {
    getMyData();
  }, []);
  const [currentInput, setCurrentInput] = useState('');

  const getMyData = () => {
    fetch('https://randomuser.me/api/?results=20')
      .then(function (response) {
        response.json().then(function (data) {
          setTableData(data.results);
          setTableDataInitial(data.results);
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };

  const filterMyData = (e) => {
    const data =
      currentInput.length <= e.length ? [...tableData] : tableDataInitial;

    const filteredData = data.filter((item) => {
      return item.name.first.toLowerCase().indexOf(e) == -1 ? false : true;
    });
    setTableData(filteredData);

    setCurrentInput(e);
  };

  const sortMyTable = (_input) => {
    const ascOrDesc = isAscending[_input];
    if (_input === 'City' || _input === 'Name') {
      const updData = tableData.sort(function (a, b) {
        var textA =
          _input === 'City'
            ? a.location.city.toLowerCase()
            : a.name.first.toLowerCase();
        var textB =
          _input === 'City'
            ? b.location.city.toLowerCase()
            : b.name.first.toLowerCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setTableData(ascOrDesc ? [...updData] : [...updData].reverse());
      setIsAscending({ ...isAscending, [_input]: !isAscending[_input] });
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <TextInput
            style={styles.textInput}
            onChangeText={(e) => {
              filterMyData(e);
            }}
            selectionColor={'white'}
          />
        </View>
        <View style={styles.rowSpaceBetween}>
          {tabsData.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  sortMyTable(item);
                }}
                style={{
                  width: '30%',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView>
          {tableData.map((item, index) => {
            return <View key={index}>{mappedItem(item)}</View>;
          })}
        </ScrollView>
      </View>
    </>
  );
};

const mappedItem = (data) => {
  return (
    <View style={styles.rowSpaceBetween}>
      <View style={styles.tab}>
        <Image
          style={styles.image}
          source={{ uri: data.picture.thumbnail }}
          alt="new"
        />
      </View>
      <View style={styles.tab}>
        <Text>{`${data.name.title} ${data.name.first} ${data.name.last}`}</Text>
      </View>
      <View style={styles.tab}>
        <Text>{data.location.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: { width: '30%', alignItems: 'center', paddingVertical: 10 },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textInput: {
    paddingHorizontal: 20,
    color: 'white',
    width: '80%',
    height: 50,
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ZapKey;
