#include<stdio.h>
#include<stdlib.h>
#define N 100 // 配列の寸法
int main(void){
 int i,n, min;
 int a[N]; // 配列の定義, a[0] から a[99] まで
 printf("n=\n");
 scanf("%d",&n);
 if(n>N) exit(1);
 // 配列への入力
 for(i=0; i<n; i++){
 printf("a[%d]=",i);
 scanf("%d",&a[i]);
 }

 //最小値の計算
 min=a[0];
 for(i=1; i<n; i++){
 if(min>a[i]) min =a[i];
 }