module.exports = {
    // npm run build 타겟 디렉토리
    // 터미널에서 ``npm run build`` 수행 시, springboot 의 정적(static) 디렉토리에 빌드 파일이 deploy 됨
    outputDir: '../backend/src/main/resources/static',

    // npm run serve 개발 진행 시에 포트가 다르기 때문에 프록시 설정
    devServer: {
        proxy: 'http://localhost:8080'
    }
};
