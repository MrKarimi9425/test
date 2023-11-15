import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
// import * as def from './def';
// import {useTranslation} from 'react-i18next';

// const w = def.elem23;
// const h = def.elem1Height;
const borderColor = 'black';

const HeaderCell = ({title, style}) => (
  <View
    style={[
      styles.border,
      styles.headerCell,
      styles.bottomLess,
      styles.leftLess,
      styles.topLess,
      style,
    ]}>
    <Text variant="bodyLarge" numberOfLines={1} style={styles.headerCellText}>
      {title}
    </Text>
  </View>
);

const FirstColumnCell = ({title, unit, style, icon}) => (
  <View
    style={[
      {flex: 1, flexDirection: 'row'},
      styles.border,
      styles.topLess,
      style,
    ]}>
    {/* <View style={[styles.borderRight, styles.imageContainer]}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{width: '85%', height: '85%'}}
      />
    </View> */}
    {/* <View style={[styles.firstColumnCell, styles.borderBottom, style]}>
      <Text variant="bodyLarge" style={styles.firstColumnCellText}>
        {title}
      </Text>
      <Text variant="bodyLarge" style={styles.firstColumnCellText}>
        {`(${unit})`}
      </Text>
    </View> */}
  </View>
);
const BodyWaterColumnCell = ({title, unit, style, icon}) => (
  <View style={[{flex: 1, flexDirection: 'row'}, style]}>
    {/* <View style={[styles.borderRight, styles.imageContainer]}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{width: '85%', height: '85%'}}
      />
    </View> */}
    <View style={[styles.firstColumnCell, style]}>
      {/* <Text
        variant="bodyLarge"
        style={[styles.firstColumnCellText, {fontSize: 12, lineHeight: 30}]}>
        {title}
      </Text>
      <Text variant="bodyLarge" style={styles.firstColumnCellText}>
        {`(${unit})`}
      </Text> */}
    </View>
  </View>
);

const Cell = ({title, from, to, style, target, control}) => (
  <View
    style={[
      styles.border,
      styles.topLess,
      styles.leftLess,
      styles.cell,
      style,
    ]}>
    <View style={styles.cellSection}>
      {/* <View style={{flexDirection: 'row'}}>
        <Text variant="titleLarge" style={styles.textStyle}>
          {title}
        </Text>
        {control && (
          <View
            style={[{flexDirection: 'row', padding: 10}, styles.cellSection]}>
            <Image
              source={require('../logo.png')}
              resizeMode="contain"
              style={{width: 15, height: 15}}
            />
            <Text style={styles.rangeTextStyle} variant="labelSmall">
              {target}
            </Text>
          </View>
        )}
      </View> */}

      {/* <View>
        <Text
          variant="labelSmall"
          style={styles.rangeTextStyle}>{`(${from}~${to})`}</Text>
        {target && (
          <View style={[{flexDirection: 'row', gap: 5}, styles.cellSection]}>
            <Image
              source={require('../logo.png')}
              resizeMode="contain"
              style={{width: 15, height: 15}}
            />
            <Text style={styles.rangeTextStyle} variant="labelSmall">
              {target}
            </Text>
          </View>
        )}
      </View> */}
    </View>
  </View>
);

const Empty = ({children, style}) => (
  <View
    style={[
      styles.border,
      styles.topLess,
      // styles.bottomLess,
      styles.emptyCell,
      styles.leftLess,
      styles.rightLess,
      style,
    ]}>
    {children}
  </View>
);

const BodyCompositionTable = data => {
  // const {t, i18n} = useTranslation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.boarder}>
        <Text style={styles.header}>Body Composition Analysis</Text>
        <View style={styles.container}>
          {/* ----- Header ----- */}
          <View style={styles.headerContainer}>
            <HeaderCell
              style={[
                styles.rightLess,
                {
                  width: '22%',
                  backgroundColor: 'white',
                  flex: 0,
                },
              ]}
            />
            <HeaderCell title="Values" />
            <HeaderCell title="Total Body Water" />
            <HeaderCell title="Soft Lean Mass" />
            <HeaderCell title="Fat Free Mass" />
            <HeaderCell style={styles.rightLess} title="Weight" />
          </View>
          {/* ------- body ------ */}
          <View style={styles.bodyContainer}>
            {/* ------ first column ------ */}
            <View style={styles.firstColumnContainer}>
              <FirstColumnCell
                style={[styles.bodyWater]}
                title={`Intracellular Water ${'\n'} Extracellular Water`}
                unit="L"
                icon={require('../logo.png')}
              />
              <FirstColumnCell
                title="Protein"
                unit="kg"
                icon={require('../logo.png')}
              />
              <FirstColumnCell
                title="Minerals"
                unit="kg"
                icon={require('../logo.png')}
              />
              <FirstColumnCell
                // style={styles.borderBottom}
                title="Body Fat Mass"
                unit="kg"
                icon={require('../logo.png')}
              />
            </View>
            {/* ----- values column ------ */}
            <View style={styles.column}>
              <Cell
                style={[styles.bodyWater]}
                // title={data?.data.tbwValues.value}
                // from={data?.data.tbwValues.range.lower}
                // to={data?.data.tbwValues.range.upper}
              />
              <Cell
              // style={[styles.borderBottom]}

              // style={styles.borderTop}
              // title={data?.data.proteinValues.value}
              // from={data?.data.proteinValues.range.lower}
              // to={data?.data.proteinValues.range.upper}
              />
              <Cell
              // style={styles.borderTop}
              // style={[styles.borderBottom]}

              // title={data?.data.mineralValues.value}
              // from={data?.data.mineralValues.range.lower}
              // to={data?.data.mineralValues.range.upper}
              />
              <Cell
              // style={[styles.borderBottom]}
              // borderbottom={false}
              // title={data?.data.fatValues.value}
              // from={data?.data.fatValues.range.lower}
              // to={data?.data.fatValues.range.upper}
              />
            </View>
            {/* ----- totla body water ------ */}
            <View style={styles.column}>
              <Cell
                style={styles.bodyWater}
                // title={data?.data.tbwValues.value}
                // from={data?.data.tbwValues.range.lower}
                // to={data?.data.tbwValues.range.upper}
                target="33.2"
                control="33.2"
              />
              <Empty />
              <Empty>
                {/* <View
                  style={[
                    styles.borderBottom,
                    {
                      height: '35%',
                      paddingHorizontal: 5,
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text
                    style={{
                      includeFontPadding: false,
                    }}>
                    non-osseous
                  </Text>
                </View> */}
              </Empty>
              <Empty />
            </View>
            {/* ----- soft lean mass ------ */}
            <View style={styles.column}>
              <Cell
                style={styles.softLeanMass}
                // title={data?.data.SoftLeanValues.value}
                // from={data?.data.SoftLeanValues.range.lower}
                // to={data?.data.SoftLeanValues.range.upper}
                target="33.2"
                control="33.2"
              />
              <Empty>
                {/* <View
                  style={[
                    // styles.borderBottom,
                    // styles.borderRight,
                    {height: '35%'},
                  ]}
                /> */}
              </Empty>
              <Empty />
            </View>
            {/* ----- fat free mass ------ */}
            <View style={styles.column}>
              <Cell
                style={styles.fatFreeMass}
                // title={data?.data.FatFreeMassValues.value}
                // from={data?.data.FatFreeMassValues.range.lower}
                // to={data?.data.FatFreeMassValues.range.upper}
                target="33.2"
                control="33.2"
              />
              <Empty />
            </View>
            {/* ----- weight ------ */}
            <View style={styles.column}>
              <Cell
                // title={data?.data.weightValues.value}
                // from={data?.data.weightValues.range.lower}
                // to={data?.data.weightValues.range.upper}
                target="33.2"
                control="33.2"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyCompositionTable;

const styles = StyleSheet.create({
  mainContainer: {
    // width: w,
    // height: h,
  },
  boarder: {
    // width: w,
    // height: h,
    // borderWidth: def.boarderWidth,
    borderColor: 'rgba(204, 204, 204, 1)',
    // marginTop: stpy * 2.59,
  },
  textStyle: {
    // fontFamily: def.iranSansBold,
    fontSize: 16,
  },
  rangeTextStyle: {
    // fontFamily: def.iranSansRegular,
    fontSize: 12,
  },
  // header: def.headersStyle,
  container: {
    height: 300,
    // height: h * 0.98,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    //backgroundColor: 'white',
  },
  headerContainer: {
    height: '12%',
    flexDirection: 'row',
    backgroundColor: '#AEE5FC',
  },
  headerCell: {
    flex: 1,
    // borderColor: borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCellText: {
    color: 'black',
    letterSpacing: -1,
    //fontWeight: 'bold',
    fontSize: 13,
    // fontFamily: def.iranSansBold,
  },
  bodyContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  firstColumnContainer: {
    width: '22%',
  },
  firstColumnCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  firstColumnCellText: {
    letterSpacing: -1,
    // fontFamily: def.iranSansBold,
    fontSize: 14,
  },
  emptyCell: {
    flex: 1,
    
  },
  border: {
    borderWidth: 0.5,
    borderColor: borderColor,
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
    padding: 5,
    // width: w * 0.05,
    // height: w * 0.05,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  softLeanMass: {
    flex: 2.3,
  },
  fatFreeMass: {
    flex: 3.3,
  },
  bodyWater: {
    flex: 1.3,
  },
  border: {
    borderWidth: 1,
  },
  bottomLess: {
    borderBottomColor: 'transparent',
  },
  topLess: {
    borderTopColor: 'transparent',
  },
  rightLess: {
    borderRightColor: 'transparent',
  },
  leftLess: {
    borderLeftColor: 'transparent',
  },
});
