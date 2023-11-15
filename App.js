import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Checkbox, Chip, Searchbar, Text} from 'react-native-paper';
import {PaperProvider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import data from './data.json';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Item = ({item, setSelected, selected}) => {
  const handleChecked = () => {
    const findItem = selected?.find(value => value?.id == item?.id);
    if (findItem) {
      const newArray = selected?.filter(value => value.id != item.id);
      setSelected(newArray);
    } else {
      setSelected(prev => [...prev, item]);
    }
  };

  return (
    <Pressable onPress={handleChecked} style={styles.item}>
      <Text>{item?.title}</Text>
      <Checkbox
        status={
          selected?.find(value => value?.id == item?.id)
            ? 'checked'
            : 'unchecked'
        }
      />
    </Pressable>
  );
};

const SearchBar = ({setGroup}) => {
  const [search, setSearch] = useState('');
  const [newData, setNewData] = useState([]);
  const [newData2, setNewData2] = useState([]);

  useEffect(() => {
    newData.map((item, i) => {
      setNewData2(newData2 => [
        ...newData2,
        {
          group: item?.group,
          data: item?.data.filter(
            item2 =>
              item2.title
                .toString()
                .toLowerCase()
                .indexOf(search.toString().toLowerCase()) > -1,
          ),
        },
      ]);
    });f
  }, [newData]);

  const searchHandler = text => {
    setSearch(text);
    if (text) {
      const filterData = data.filter(item => {
        return (
          item?.group
            .toString()
            .toLowerCase()
            .indexOf(text.toString().toLowerCase()) > -1 ||

          item.data.find(
            value =>
              value?.title
                .toString()
                .toLowerCase()
                .indexOf(text.toString().toLowerCase()) > -1,
          )
        );
      });
      setNewData(filterData);
      setGroup(newData2);
    } else {
      setGroup(data);
    }
  };
  return (
    <View style={styles.searchBarContainer}>
      <Searchbar
        value={search}
        onChangeText={searchHandler}
        placeholder="Search"
        mode="bar"
      />
    </View>
  );
};

const SelectedList = ({selected = [], setSelected}) => {
  const removeHandler = item => {
    const newArray = selected?.filter(value => value.id != item.id);
    setSelected(newArray);
  };
  return (
    <View style={styles.selectedContainer}>
      {selected?.map((item, i) => (
        <Chip icon="close" onPress={() => removeHandler(item)} key={i}>
          {item?.title}
        </Chip>
      ))}
    </View>
  );
};

const ItemList = ({list, setSelected, selected}) => {
  const renderItem = ({item}) => {
    return <Item item={item} selected={selected} setSelected={setSelected} />;
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      style={styles.listContainer}
      keyExtractor={(item, i) => item + i}
    />
  );
};

const Group = ({item, selected, setSelected}) => {
  const [open, setOpen] = useState(true);
  const openHandler = () => {
    LayoutAnimation.easeInEaseOut();
    setOpen(!open);
  };

  return (
    <>
      <Pressable onPress={openHandler} style={styles.group}>
        <Text variant="bodyLarge">{item?.group}</Text>
        {open ? (
          <MaterialIcons name="keyboard-arrow-down" size={25} color="#000" />
        ) : (
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#000" />
        )}
      </Pressable>
      {open && (
        <ItemList
          list={item?.data}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </>
  );
};

const GroupList = ({group, selected, setSelected}) => {
  const renderItem = ({item, index}) => (
    <Group
      selected={selected}
      index={index}
      setSelected={setSelected}
      item={item}
    />
  );
  return (
    <FlatList
      data={group}
      renderItem={renderItem}
      keyExtractor={(item, i) => item + i}
    />
  );
};

const App = () => {
  const [group, setGroup] = useState(data);
  const [selected, setSelected] = useState([]);

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Search bar */}
        <SearchBar setGroup={setGroup} />
        {/* Selected */}
        {selected?.length ? (
          <SelectedList setSelected={setSelected} selected={selected} />
        ) : (
          <Text>Select an Item</Text>
        )}
        {/* List */}
        <GroupList
          group={group}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  selectedContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
  groupContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(241,238,238,1)',
    padding: 10,
    borderRadius: 10,
  },
  group: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});
