﻿// dataset from 2008
var random_points = 
[
  { id: '16', x: 349.14751, y: 185.57058},
  { id: 'a', x: 87.869147, y:163.45594},
  { id: '~~', x: 308.87326, y: 615.02591},
  { id: 'b', x: 136.8396, y: 204.27381},
  { id: '|', x: 402.1532, y: 220.40197},
  { id: 'c', x: 154.31177, y: 165.29743},
  { id: 'd', x: 186.56808, y: 221.74598},
  { id: 'e', x: 108.61532, y: 227.12203},
  { id: 'f', x: 181.19203, y: 185.45763},
  { id: 'g', x: 155.65578, y: 223.09},
  { id: '>23', x: 314.24931, y: 293.52171},
  { id: 'h', x: 126.08749, y: 182.7696},
  { id: 'i', x: 92.487167, y: 205.61783},
  { id: 'j', x: 185.22407, y: 158.57737},
  { id: 'k', x: 138.18361, y: 138.41718},
  { id: 'l', x: 100.93026, y: 193.02422},
  { id: 'm', x: 149.90072, y: 233.84209},
  { id: 'n', x: 167.37289, y: 194.86571},
  { id: 'o', x: 199.6292, y: 251.31426},
  { id: 'p', x: 121.67644, y: 256.69031},
  { id: 'q', x: 194.25315, y: 215.02591},
  { id: 'r', x: 168.7169, y: 252.65828},
  { id: 's', x: 139.14861, y: 212.33788},
  { id: 't', x: 105.54828, y: 235.18611},
  { id: 'u', x: 198.28519, y: 188.14565},
  { id: 'v', x: 137.21269, y: 165.98546},
  { id: 'w', x: 299.46517, y: 549.68516},
  { id: 'xws', x: 319.62537, y: 514.74081},
  { id: 'y', x: 319.62536, y: 534.90101},
  { id: 'z', x: 342.76194, y: 515.50975},
  { id: 'A', x: 336.95336, y: 495.92464},
  { id: 'B', x: 357.11356, y: 460.98029},
  { id: 'C', x: 357.11355, y: 481.14049},
  { id: 'D', x: 380.25013, y: 461.74923},
  { id: 'E', x: 374.58572, y: 440.8201},
  { id: 'F', x: 394.74592, y: 405.87575},
  { id: 'G', x: 394.74591, y: 426.03595},
  { id: 'H', x: 417.88249, y: 406.64469},
  { id: 'I', x: 431.17845, y: 545.65311},
  { id: 'J', x: 424.5545, y: 524.27706},
  { id: 'K', x: 401.86647, y: 512.90101},
  { id: 'L', x: 383.86647, y: 480.90101},
  { id: '§', x: 171.88006, y: 714.93467},
  { id: 'M', x: 375.86647, y: 500.90101},
  { id: 'N', x: 411.86647, y: 534.90101},
  { id: 'O', x: 401.86647, y: 494.90101},
  { id: '44', x: 299.98052, y: 256.86734},
  { id: 'P', x: 391.86647, y: 520.90101},
  { id: 'Q', x: 421.86647, y: 510.90101},
  { id: 'R', x: 399.86647, y: 454.90101},
  { id: 'S', x: 417.86647, y: 432.90101},
  { id: 'T', x: 335.86647, y: 444.90101},
  { id: 'U', x: 339.86647, y: 470.90101},
  { id: 'V', x: 311.86647, y: 422.90101},
  { id: 'W', x: 317.86647, y: 452.90101},
  { id: 'X', x: 293.86647, y: 428.90101},
  { id: 'Y', x: 178.02504, y: 234.75439},
  { id: 'Z', x: 174.02504, y: 210.75439},
  { id: '1', x: 148.02504, y: 184.75439},
  { id: '2', x: 130.02504, y: 234.75439},
  { id: '3', x: 118.02504, y: 210.75439},
  { id: '===', x: 209.47196, y: 374.51816},
  { id: '>>', x: 205.53604, y: 661.20619},
  { id: '4', x: 110.02504, y: 168.75439},
  { id: '5', x: 166.02504, y: 174.75439},
  { id: '6', x: 122.02504, y: 154.75439},
  { id: '7', x: 164.02504, y: 148.75439},
  { id: '8', x: 116.02504, y: 194.75439},
  { id: '9', x: 152.02504, y: 206.75439},
  { id: '10', x: 142.02504, y: 256.75439},
  { id: '11', x: 245.82462, y: 163.56889},
  { id: '12', x: 294.79508, y: 204.38676},
  { id: '13', x: 312.26725, y: 165.41038},
  { id: '14', x: 344.52356, y: 221.85893},
  { id: '15', x: 266.5708, y: 227.23498},
  { id: '17', x: 313.61126, y: 223.20295},
  { id: '18', x: 288.07501, y: 197.66669},
  { id: '19', x: 250.44264, y: 205.73078},
  { id: '20', x: 343.17955, y: 158.69032},
  { id: '21', x: 296.13909, y: 138.53013},
  { id: '22', x: 258.88574, y: 193.13717},
  { id: '23', x: 295.76008, y: 225.89096},
  { id: '39', x: 329.35657, y: 188.30747},
  { id: '24', x: 325.32837, y: 194.97866},
  { id: '25', x: 357.58468, y: 251.42721},
  { id: '26', x: 279.63192, y: 256.80326},
  { id: '27', x: 352.20863, y: 215.13886},
  { id: '28', x: 326.67238, y: 252.77123},
  { id: '29', x: 297.10409, y: 212.45083},
  { id: '30', x: 263.50376, y: 235.29906},
  { id: '31', x: 356.24067, y: 188.2586},
  { id: '32', x: 288.4481, y: 168.78644},
  { id: '33', x: 335.98052, y: 234.86734},
  { id: '34', x: 331.98052, y: 210.86734},
  { id: '35', x: 305.98052, y: 184.86734},
  { id: '36', x: 287.98052, y: 234.86734},
  { id: '37', x: 271.94848, y: 209.52333},
  { id: '38', x: 267.98052, y: 168.86734},
  { id: '40', x: 281.32453, y: 154.86734},
  { id: '41', x: 301.82032, y: 151.55537},
  { id: '43', x: 309.98052, y: 206.86734},
  { id: '45', x: 161.82462, y: 23.56889},
  { id: '46', x: 210.79508, y: 64.38676},
  { id: '47', x: 228.26725, y: 25.41038},
  { id: '48', x: 260.52356, y: 81.85893},
  { id: '49', x: 182.5708, y: 87.23498},
  { id: '50', x: 255.14751, y: 45.57058},
  { id: '51', x: 229.61126, y: 83.20295},
  { id: '52', x: 200.04297, y: 42.88255},
  { id: '53', x: 166.44264, y: 65.73078},
  { id: '54', x: 259.17955, y: 18.69032},
  { id: '55', x: 212.13909, y: -1.46987},
  { id: '56', x: 174.88574, y: 53.13717},
  { id: '57', x: 223.8562, y: 93.95504},
  { id: '58', x: 241.32837, y: 54.97866},
  { id: '59', x: 273.58468, y: 111.42721},
  { id: '60', x: 195.63192, y: 116.80326},
  { id: '61', x: 268.20863, y: 75.13886},
  { id: '>=12', x: 181.504, y: 667.3023},
  { id: '999', x: 240.33776, y: 730.47072},
  { id: '62', x: 242.67238, y: 112.77123},
  { id: '63', x: 213.10409, y: 72.45083},
  { id: '64', x: 179.50376, y: 95.29906},
  { id: '65', x: 272.24067, y: 48.2586},
  { id: '%', x: 171.12374, y: 738.17076},
  { id: '66', x: 211.16817, y: 26.09841},
  { id: '67', x: 251.98052, y: 94.86734},
  { id: '68', x: 247.98052, y: 70.86734},
  { id: '69', x: 221.98052, y: 44.86734},
  { id: '70', x: 203.98052, y: 94.86734},
  { id: '71', x: 191.98052, y: 70.86734},
  { id: '72', x: 174.57243, y: 32.899379},
  { id: '73', x: 239.98052, y: 34.86734},
  { id: '74', x: 195.98052, y: 14.86734},
  { id: '<=12', x: 120.96938, y: 105.61782},
  { id: '75', x: 237.98052, y: 8.86734},
  { id: '76', x: 185.94848, y: 57.555366},
  { id: '77', x: 225.98052, y: 62.835301},
  { id: '78', x: 215.98052, y: 116.86734},
  { id: '79', x: 302.29738, y: 116.62543},
  { id: '80', x: 296.63297, y: 95.696302},
  { id: '81', x: 316.79317, y: 60.751952},
  { id: '82', x: 316.79316, y: 80.912152},
  { id: '97', x: 188.00821, y: 717.6227},
  { id: '83', x: 339.92974, y: 61.520892},
  { id: '84', x: 316.53767, y: 108.4332},
  { id: '85', x: 339.91372, y: 87.777212},
  { id: '86', x: 269.00304, y: 137.07316},
  { id: '87', x: 245.00304, y: 135.07316},
  { id: '88', x: 219.00304, y: 139.07316},
  { id: '89', x: 191.00304, y: 137.07316},
  { id: '90', x: 219.00304, y: 169.07316},
  { id: '91', x: 227.00304, y: 201.07316},
  { id: '92', x: 217.0807, y: 225.77802},
  { id: '94', x: 175.60012, y: 701.27869},
  { id: '95', x: 181.60012, y: 731.27869},
  { id: '96', x: 157.60012, y: 707.27869},
  { id: '98', x: 200.10433, y: 741.81493},
  { id: '&', x: 147.12374, y: 716.17076},
  { id: '!', x: 163.87584, y: 750.2028},
  { id: '?', x: 157.34801, y: 722.17076},
  { id: '=d', x: 159.53183, y: 732.51477},
  { id: '(d)', x: 182.38005, y: 749.98693},
  { id: '93', x: 199.60012, y: 723.27869},
  { id: '{}', x: 170.28394, y: 727.13872},
  { id: '[]', x: 147.43572, y: 735.20279},
  { id: '+++', x: 204.84122, y: 231.15407},
  { id: '#', x: 287.36905, y: 12.33789},
  { id: '-s', x: 150.59333, y: 400.24177},
  { id: '<e', x: 98.12116, y: 503.52171},
  { id: '!=', x: 146.0959, y: 640.51816},
  { id: '==', x: 195.53604, y: 670.48612},
  { id: '!==', x: 154.62374, y: 653.33434},
  { id: '/ww', x: 175.53604, y: 656.48612},
  { id: '\\a', x: 190.75189, y: 653.20619},
  { id: '//a', x: 240.28054, y: 693.39842},
  { id: '333', x: 248.59482, y: 685.84657},
  { id: '555', x: 250.38277, y: 672.91824},
  { id: '\\w', x: 236.34462, y: 680.08645},
  { id: '\\d', x: 223.65659, y: 683.99033},
  { id: '\\s', x: 218.87244, y: 666.7104},
  { id: '$', x: 209.16379, y: 646.99793},
  { id: '^^', x: 205.22787, y: 633.68596},
  { id: '^', x: 179.85182, y: 642.4701},
  { id: '111', x: 258.00292, y: 700.56663},
  { id: 'C°', x: 161.91589, y: 633.15813},
  { id: '-c-', x: 195.22787, y: 642.96589},
  { id: '+c+', x: 163.72366, y: 645.97431},
  { id: '+=v', x: 175.22787, y: 628.96589},
  { id: '-=v', x: 190.44372, y: 625.68596},
  { id: '/=v', x: 237.38046, y: 655.25425},
  { id: '*=v', x: 228.72447, y: 656.4701},
  { id: '|=v', x: 218.56427, y: 639.19017},
  { id: '&=v', x: 255.21877, y: 716.56663},
  { id: '222', x: 239.93884, y: 711.19058},
  { id: '42', x: 273.98052, y: 194.86734},
  { id: '666', x: 249.63066, y: 659.67035},
  { id: '99', x: 198.76032, y: 712.24665},
  { id: '777', x: 243.23784, y: 768.61489},
  { id: '888', x: 239.30192, y: 755.30292},
  { id: '1000', x: 267.58416, y: 715.17436},
  { id: 'aa', x: 264.99226, y: 758.31093},
  { id: 'bb', x: 229.45601, y: 779.68698},
  { id: 'cc', x: 252.89613, y: 762.40705},
  { id: 'dd', x: 266.0281, y: 734.82275},
  { id: 'ee', x: 253.34007, y: 748.13471},
  { id: 'ff', x: 252.58796, y: 734.88682},
  { id: 'gg', x: 212.6314, y: 810.32776},
  { id: 'hh', x: 233.82745, y: 802.90365},
  { id: 'ii', x: 221.13942, y: 805.46351},
  { id: 'jj', x: 212.32323, y: 782.80753},
  { id: 'kk', x: 209.1974, y: 796.37541},
  { id: 'll', x: 238.01357, y: 791.19159},
  { id: 'mm', x: 172.31101, y: 814.3598},
  { id: 'nn', x: 185.44298, y: 796.18358},
  { id: 'oo', x: 180.81903, y: 809.49555},
  { id: 'pp', x: 200.22712, y: 784.15154},
  { id: 'qq', x: 194.41325, y: 816.5356},
  { id: 'rr', x: 197.69318, y: 800.59968},
  { id: 'ss', x: 248.91975, y: 782.10349},
  { id: 'tt', x: 264.73974, y: 777.36741},
  { id: 'uu', x: 264.14783, y: 789.33536},
  { id: '444', x: 264.41481, y: 683.79851},
  { id: 'vv', x: 245.92355, y: 761.30333},
  { id: 'ww', x: 218.60548, y: 789.65535},
  { id: 'xx', x: 251.45369, y: 797.91167},
  { id: 'yy', x: 280.83393, y: 738.83906},
  { id: 'zz', x: 283.61808, y: 722.83906},
  { id: 'A!', x: 277.52196, y: 690.19048},
  { id: 'B"', x: 308.84615, y: 734.29521},
  { id: 'C§', x: 293.19932, y: 737.44679},
  { id: 'D%', x: 300.01551, y: 721.44679},
  { id: 'E&', x: 304.04754, y: 748.39113},
  { id: 'F/', x: 291.64326, y: 757.09518},
  { id: 'G()', x: 278.95523, y: 770.40714},
  { id: '<<?', x: 220.96938, y: 219.05796},
  { id: 'H)', x: 278.20312, y: 757.15925},
  { id: 'I(', x: 313.20312, y: 724.37511},
  { id: 'J*', x: 324.32104, y: 729.47912},
  { id: 'K#', x: 292.09676, y: 708.66294},
  { id: 'L´', x: 290.41254, y: 769.15954},
  { id: 'M*', x: 335.24629, y: 734.67876},
  { id: 'O/', x: 272.17381, y: 726.74284},
  { id: 'P^', x: 315.18221, y: 748.31113},
  { id: 'Q°', x: 324.28215, y: 742.23104},
  { id: 'R|', x: 301.48958, y: 760.58346},
  { id: 'S§', x: 345.68946, y: 33.263764},
  { id: 'Ty', x: 125.52925, y: 86.703899},
  { id: 'U,', x: 371.51405, y: 55.536912},
  { id: 'V[]', x: 30.64981, y: 75.568959},
  { id: 'W}', x: 348.64981, y: 53.568959}
];