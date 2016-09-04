/**
 * Created by CornerSkyless on 16/9/4.
 */
(function() {
    'use strict';
    angular
        .module('zhongJiApp')
        .controller('orderDetailCtrl', orderDetailCtrl);

    orderDetailCtrl.$inject = ['$log','$http','$state','$stateParams'];
    function orderDetailCtrl($log,$http,$state,$stateParams) {
        var vm = this;

        vm.query = function () {
            vm.isLoading = true;
            $http.post(backHost,{method:'queryOrder',orderId:$stateParams.orderId})
                .success(function (response) {
                    if(response.result){
                        console.log(response);
                        vm.orderInfo = response.data;
                        vm.isLoading = false;
                    }else {
                        vm.isLoading = false;
                        console.error(response.errorInfo);
                        vm.notFound = response.errorInfo;
                    }

                })
                .error(function (error) {
                    console.error(error);

                })
        };

        activate();

        ////////////////

        function activate() {
            $log.log('I\'m a line from orderDetailCtrl.js');
            vm.questions=[
                '任何癌癥、腫瘤、血管瘤、息肉、囊腫、腫塊、贅生物或腫瘤指標檢查異常（甲胎蛋白（AFP）、癌胚抗原（CEA）、前列腺特異性抗原（PSA）、癌抗原125（CA125）、癌抗原19（CA199））; 淋巴腺的疾病、貧血、白血病、其他與血有關的疾病;',
                '任何胸悶、胸痛、心悸、氣急、不能平臥、心臟病或其它血管病（例如:風濕性熱、高血壓、膽固醇高、心絞痛、心律不整、心臟雜音、心臟病發作、中風等）;',
                '任何呼吸系統問題（例如: 哮喘、結核、咳血、肺氣腫、肺塵埃沈著病或其他呼吸器官疾病等）;',
                '任何消化系統問題（例如: 任何肝區疼痛、肝炎、肝炎病毒帶菌者、肝功能異常、肝硬化、膽石、食道或胃或十二指腸饋瘍或任何饋瘍等）;',
                '任何泌尿生殖系統問題（例如:血尿、蛋白尿、腎石、腎炎或腎病、腎功能衰竭、前列腺疾病、卵巢囊腫、子宮內膜移位、宮頸疾病等）;',
                '任何內分泌疾病（例如: 糖尿病、腦下垂體問題、甲狀腺或副甲狀腺問題）;',
                '任何神經或精神性疾病、心理或精神疾病、人格障礙或腦功能問題（例如: 癲癇、癱瘓、多發性硬化、帕金遜癥、老年癡呆癥等）;',
                '慢性頸腰痛或脊椎病變、強直性脊椎炎、坐骨神經痛、肌肉關節病變、類風濕、紅斑狼瘡癥、重肌無力癥或其他免疫系統疾病;',
                '聽力、視力、語言、咀嚼障礙、智力障礙、脊柱、胸廓畸形、四肢、手、足指殘缺等身體殘障及眼、耳、鼻、喉、口腔等疾病;',
                '愛滋病、與愛滋病有關的疾病、HPV陽性、HIV感染或性傳播疾病;',
                '最近六個月內是否出現下列身體不這癥狀：反復頭暈、頭痛、暈闕、紫紺、不明原因皮下出血點、流鼻血、反復齒齦出血、嘔血、浮腫、腹痛、便血、黑便、眼睛脹痛、視力或聽力明顯下降、視物不清、不明原因的聲嘶、關節紅腫或關節酸痛？',
                '體重減少11磅（5公斤）或以上？',
                '平均每天吸食任何煙草產品達20支或以上？',
                '連續5天或以上每天平均飲用任何含酒精成份超過10%的酒精飲料超過1,500毫升？',
                '因病持續服藥超過兩個月？',
                '連續因病住院超過七天？',
                '被保險人是否正在懷孕？若「是」，請產後兩個月後再投保。？',
                '壹位或多於壹位直系親屬患有乳癌時年齡少於50歲？',
                '是否患有子宮頸疾病且宮頸上皮內瘤病變檢測CIN III級？',
                '被保險人曾否投保任何人壽保險或其他重疾保險而被拒保、延擱、撤銷、被附加條款？或曾持有該種保險之保單或證書，而於事後曾被修正、增加保費、取消、或被拒絕續保？'

            ];
            vm.query();

        }

        vm.confirm = function () {
            vm.orderInfo.method = 'confirmOrder';
            $http.post(backHost,vm.orderInfo)
                .success(function (response) {
                    if(response.result){
                        vm.query();
                    }else {
                        console.error(response.errorInfo);
                    }

                })
                .error(function (error) {
                    console.error(error);
                })
        };
        
        vm.pay = function () {
            vm.orderInfo.method = 'payOrder';

            $http.post(backHost,vm.orderInfo)
                .success(function (response) {
                    if(response.result){
                        vm.query();
                    }else {
                        console.error(response.errorInfo);
                    }

                })
                .error(function (error) {
                    console.error(error);
                })
        }
    }
})();