import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const white = '#fff';
const black = '#000';

const HeaderCell = ({title, style}) => (
  <View style={[styles.headerCell, style]}>
    <Text variant="bodyLarge" numberOfLines={1} style={styles.headerCellText}>
      {title}
    </Text>
  </View>
);

const FirstColumnCell = ({title, unit, style}) => (
  <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={[styles.borderRight, styles.imageContainer]}>
      <Image
        source={require('../logo.png')}
        resizeMode="contain"
        style={{width: '80%', height: '80%'}}
      />
    </View>
    <View style={[styles.firstColumnCell, styles.borderTop, style]}>
      <Text variant="bodyLarge" style={styles.firstColumnCellText}>
        {title}
      </Text>
      <Text variant="bodyLarge" style={styles.firstColumnCellText}>
        {`(${unit})`}
      </Text>
    </View>
  </View>
);

const Cell = ({title, from, to, style, target, control}) => (
  <View style={[styles.cell, styles.borderRight, style]}>
    <View style={styles.cellSection}>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="labelSmall">{`(${from}~${to})`}</Text>
    </View>
    {target && control && (
      <View>
        <View style={[{flexDirection: 'row', gap: 5}, styles.cellSection]}>
          <Image
            source={require('../logo.png')}
            resizeMode="contain"
            style={{width: 12, height: 12}}
          />
          <Text style={{fontSize: 10}} variant="labelSmall">
            {target}kg
          </Text>
        </View>
        <View style={[{flexDirection: 'row', gap: 5}, styles.cellSection]}>
          <Image
            source={require('../logo.png')}
            resizeMode="contain"
            style={{width: 12, height: 12}}
          />
          <Text style={{fontSize: 10}} variant="labelSmall">
            {control}kg
          </Text>
        </View>
      </View>
    )}
  </View>
);

const Empty = ({children, style}) => (
  <View style={[styles.emptyCell, style]}>{children}</View>
);

const BodyComposition = () => {
  return (
    <View style={styles.container}>
      {/* ----- Header ----- */}
      <View style={styles.headerContainer}>
        <HeaderCell
          style={{
            width: '20%',
            backgroundColor: 'white',
            flex: 0,
            borderRightWidth: 0,
          }}
        />
        <HeaderCell title="Values" />
        <HeaderCell title="Total Body Water" />
        <HeaderCell title="Soft Lean Mass" />
        <HeaderCell title="Fat Free Mass" />
        <HeaderCell title="Weight" />
      </View>
      {/* ------- body ------ */}
      <View style={styles.bodyContainer}>
        {/* ------ first column ------ */}
        <View style={styles.firstColumnContainer}>
          <FirstColumnCell
            title={`Intracellular water${'\n'}Extracellular water`}
            unit="L"
          />
          <FirstColumnCell title="Protein" unit="kg" />
          <FirstColumnCell title="Minerals" unit="kg" />
          <FirstColumnCell title="Body Fat Mass" unit="kg" />
        </View>
        {/* ----- values column ------ */}
        <View style={styles.column}>
          <Cell
            style={{padding: 1, flexDirection: 'row'}}
            title="41.4"
            from="36.1"
            to="44.1"
          />
          <Cell
            style={[styles.borderTop, {flexDirection: 'row', padding: 0.5}]}
            title="41.4"
            from="36.1"
            to="44.1"
          />
          <Cell
            style={[styles.borderTop, {flexDirection: 'row', padding: 0.5}]}
            title="41.4"
            from="36.1"
            to="44.1"
          />
          <Cell
            style={[
              styles.borderTop,
              {flexDirection: 'row'},
              styles.borderBottom,
            ]}
            title="41.4"
            from="36.1"
            to="44.1"
          />
        </View>
        {/* ----- totla body water ------ */}
        <View style={styles.column}>
          <Cell
            style={{flexDirection: 'row'}}
            title="41.4"
            from="36.1"
            to="44.1"
            target="33.2"
            control="33.2kg"
          />
          <Empty />
          <Empty style={{borderStyle: 'dashed'}}>
            <View
              style={[
                styles.borderBottom,
                {height: '35%', paddingHorizontal: 5, justifyContent: 'center'},
              ]}>
              <Text
                style={{
                  includeFontPadding: false,
                }}>
                non-osscous
              </Text>
            </View>
          </Empty>
          <Empty style={styles.borderBottom} />
        </View>
        {/* ----- soft lean mass ------ */}
        <View style={styles.column}>
          <Cell
            title="41.4"
            from="36.1"
            to="44.1"
            target="33.2"
            control="33.2kg"
          />
          <Empty style={{borderStyle: 'dashed'}}>
            <View
              style={[styles.borderBottom, styles.borderRight, {height: '35%'}]}
            />
          </Empty>
          <Empty style={styles.borderBottom} />
        </View>
        {/* ----- fat free mass ------ */}
        <View style={styles.column}>
          <Cell
            title="41.4"
            from="36.1"
            to="44.1"
            target="33.2"
            control="33.2kg"
          />
          <Empty style={styles.borderBottom} />
        </View>
        {/* ----- weight ------ */}
        <View style={styles.column}>
          <Cell
            title="41.4"
            from="36.1"
            to="44.1"
            target="33.2"
            control="33.2kg"
            style={styles.borderBottom}
          />
        </View>
      </View>
    </View>
  );
};

export default BodyComposition;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: '12%',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  headerCell: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCellText: {
    color: 'black',
    letterSpacing: -1,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  firstColumnContainer: {
    width: '20%',
  },
  firstColumnCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  firstColumnCellText: {
    color: 'dimgray',
    letterSpacing: -1,
    fontWeight: 'bold',
  },
  emptyCell: {
    height: '25%',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: 'black',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  cellSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
